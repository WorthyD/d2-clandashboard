import { moduleMetadata, Story } from '@storybook/angular';
import { StorybookModule } from '../../storybook/storybook.module';
import { ClanSealTableModule } from './clan-seal-table.module';
import { ClanSealTableComponent } from './clan-seal-table.component';
import { ClanSealTableDataItem } from './clan-seal-table-data-item';

const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth'
];
function createUser(id: number): ClanSealTableDataItem {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    completedTriumphCount: Math.round(Math.random() * 100),
    completionPercentage: Math.round(Math.random() * 100),
    displayName: name,
    membershipId: id,
    membershipTypeId: 3,
    totalTriumphCount: 100
  };
}

function getClanSealData(): ClanSealTableDataItem[] {
  return Array.from({ length: 100 }, (_, k) => createUser(k + 1));
}

export default {
  title: 'Seals / Clan Seal Table',
  component: ClanSealTableComponent,
  decorators: [
    moduleMetadata({
      imports: [ClanSealTableModule, StorybookModule]
    })
  ]
};
const Template: Story<ClanSealTableComponent> = (args) => ({
  props: args
});

export const base = Template.bind({});
base.args = {
  // totalMembers: 100,
  // completedNumber: 30,
  // completedPercentage: 30,
  // guildedNumber: 33,
  // guildedPercentage: 33,
  // hasGuilded: true,
  // isLoading: false,
  // seal: GUILDED_SEAL
  clanSealTableData: getClanSealData()
};
base.argTypes = {};
