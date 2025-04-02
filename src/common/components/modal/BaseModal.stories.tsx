import type { Meta, StoryObj } from '@storybook/react';
import BaseModal from './BaseModal';
import { useModalStore } from '@/admin/stores/modalStore';
const meta = {
  title: 'Common/Modal',
  component: BaseModal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story: React.ComponentType) => {
      // 스토리북에서 모달 스토어 초기화
      useModalStore.setState({
        open: true,
        title: '안내',
        description: '모달 내용이 여기에 표시됩니다.',
      });
      return <Story />;
    },
  ],
} satisfies Meta<typeof BaseModal>;

export default meta;
type Story = StoryObj<typeof BaseModal>;

export const Default: Story = {
  args: {
    description: '모달 내용이 여기에 표시됩니다.',
  },
};
