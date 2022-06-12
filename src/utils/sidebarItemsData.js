import {
  ChatAltIcon,
  InboxIcon,
  SaveIcon,
  BookmarkIcon,
  EmojiHappyIcon,
  LibraryIcon,
} from '@heroicons/react/outline';

export const sidebarItemsData = [
  {
    text: 'Thread',
    icon: <SaveIcon />,
  },
  {
    text: 'All DMs',
    icon: <InboxIcon />,
  },
  {
    text: 'Mentions & Reactions',
    icon: <ChatAltIcon />,
  },
  {
    text: 'Save Items',
    icon: <BookmarkIcon />,
  },

  {
    text: 'People Groups',
    icon: <EmojiHappyIcon />,
  },
  {
    text: 'More',
    icon: <LibraryIcon />,
  },
];
