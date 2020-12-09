import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, object } from '@storybook/addon-knobs';
import { ActivityModeSelectModule } from './activity-mode-select.module';
import { ActivityModeSelectComponent } from './activity-mode-select.component';
import { StorybookModule } from '../../../storybook/storybook.module';

const hashes = [
  {
    displayProperties: {
      description: 'All game types wrapped into one.',
      name: 'All',
      icon: '/common/destiny2_content/icons/DestinyActivityModeDefinition_f6de6d95f600f199c9a674c73cbefbcc.png',
      hasIcon: true
    },
    pgcrImage: '/img/theme/destiny/bgs/stats/banner_allmodes.jpg',
    modeType: 0,
    activityModeCategory: 0,
    isTeamBased: false,
    tier: 0,
    isAggregateMode: true,
    friendlyName: 'all',
    supportsFeedFiltering: false,
    display: true,
    order: 0,
    hash: 748895195,
    index: 0,
    redacted: false,
    blacklisted: false
  },
  {
    displayProperties: {
      description: "Just how many Vex did I shoot while they didn't have time to explain?",
      name: 'Story',
      icon: '/common/destiny2_content/icons/DestinyActivityModeDefinition_5f8a923a0d0ac1e4289ae3be03f94aa2.png',
      hasIcon: true
    },
    pgcrImage: '/img/theme/destiny/bgs/stats/banner_story_1.jpg',
    modeType: 2,
    activityModeCategory: 1,
    isTeamBased: false,
    tier: 0,
    isAggregateMode: false,
    parentHashes: [1164760493],
    friendlyName: 'story',
    supportsFeedFiltering: false,
    display: true,
    order: 4000,
    hash: 1686739444,
    index: 8,
    redacted: false,
    blacklisted: false
  },
  {
    displayProperties: {
      description: 'All of your Raid stats rolled into one.',
      name: 'Raid',
      icon: '/common/destiny2_content/icons/DestinyActivityModeDefinition_bfe80e3dafe6686a9dc42df0606bdc9b.png',
      hasIcon: true
    },
    pgcrImage: '/img/theme/destiny/bgs/stats/banner_raid_1.jpg',
    modeType: 4,
    activityModeCategory: 1,
    isTeamBased: false,
    tier: 0,
    isAggregateMode: false,
    parentHashes: [1164760493],
    friendlyName: 'raid',
    supportsFeedFiltering: false,
    display: true,
    order: 2000,
    hash: 2043403989,
    index: 7,
    redacted: false,
    blacklisted: false
  }
];

export default {
  title: 'Shared / inputs / activity mode select',
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [ActivityModeSelectModule, StorybookModule]
    })
  ]
};

export const baseLoading = () => ({
  component: ActivityModeSelectComponent,
  template: `
  <div>
    <lib-activity-mode-select></lib-activity-mode-select>
  </div>
   `,
  props: {}
});
