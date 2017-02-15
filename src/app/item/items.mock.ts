import { Item } from './item';

export const mockItems = [
    {
        id: 1,
        name: 'Sandora Grapefruit Juice',
        description: 'Awesome juice for awesome people'
    },
    {
        id: 2,
        name: 'Coca-Cola',
        description: 'The best way to tidy up your stomach'
    },
    {
        id: 3,
        name: 'Mirinda',
        description: 'Just like Fanta, but sounds like somebody\'s name'
    },
    {
        id: 4,
        name: 'Starbucks Espresso',
        description: 'For all of you cool guys out there'
    }
].map(item => new Item(item.id, item.name, item.description));
