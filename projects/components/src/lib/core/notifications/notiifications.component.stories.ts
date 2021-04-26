import { Story, Meta } from '@storybook/angular/types-6-0';
import { NotificationsComponent } from './notifications.component';

export default {
  title: 'Core / Notifications',
  component: NotificationsComponent
};

const Template: Story<NotificationsComponent> = (args: NotificationsComponent) => ({
  props: args
});

export const Notification = Template.bind({});

Notification.args = {};
