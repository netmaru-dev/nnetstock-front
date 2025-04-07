import { useRef } from 'react';
import ReactQuill, { Quill } from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { ImageResize } from 'quill-image-resize-module-ts';
import axios from 'axios';

Quill.register('modules/ImageResize', ImageResize);

interface EditorProps {
  value: string;
  onChange: (val: string) => void;
  className?: string;
}

const Editor = ({ value, onChange, className }: EditorProps) => {
  const QuillRef = useRef<ReactQuill | null>(null);

  const imageHandler = () => {
    const input = document.createElement('input');
    const formData = new FormData();
    let url = '';

    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files;
      if (file && file.length > 0) {
        formData.append('image', file[0]);

        try {
          const res = await axios.post('/api/upload', formData); // 백엔드 API 경로
          url = res.data.url;

          const editor = QuillRef.current?.getEditor();
          const range = editor?.getSelection()?.index;

          if (range !== null && range !== undefined) {
            editor?.setSelection(range);
            editor?.clipboard.dangerouslyPasteHTML(
              range,
              `<img src="${url}" alt="업로드 이미지" />`
            );
          }

          return { ...res, success: true };
        } catch (error) {
          console.error('이미지 업로드 오류', error);
          return { success: false };
        }
      }
    };
  };

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        [{ color: [] }, { background: [] }],
        [
          { list: 'ordered' },
          { list: 'bullet' },
          { indent: '-1' },
          { indent: '+1' },
          { align: [] },
        ],
        ['image', 'video'],
        ['link'],
      ],
      handlers: {
        image: imageHandler,
      },
    },
    // TODO FIXME 이미지 사이즈조절로 인한 삭제 불가능한 버그로 주석처리
    // ImageResize: {
    //   modules: ['Resize', 'DisplaySize'],
    // },
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'code-block',
    'list',
    'indent',
    'link',
    'image',
    'video',
    'color',
    'background',
    'align',
  ];

  return (
    <ReactQuill
      value={value}
      onChange={onChange}
      theme='snow'
      modules={modules}
      formats={formats}
      className={className}
      // style={{ height: '600px' }}
    />
  );
};
export default Editor;
