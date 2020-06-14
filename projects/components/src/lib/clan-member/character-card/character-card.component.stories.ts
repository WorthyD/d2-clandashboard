import { moduleMetadata } from '@storybook/angular';

import { CharacterCardComponent } from './character-card.component';
import { CharacterCardModule } from './character-card.module';

import { MOCK_CHARACTER_CARD } from './_MOCK_CHARACTER_CARD';

export default {
    title: 'Clan Member / Character Card',
    decorators: [
        moduleMetadata({
            imports: [CharacterCardModule],
        }),
    ],
};

export const base = () => ({
    component: CharacterCardComponent,
    template: `
        <lib-character-card [character]="character"></lib-character-card>
   `,
    props: {
        character: MOCK_CHARACTER_CARD
    },
});
