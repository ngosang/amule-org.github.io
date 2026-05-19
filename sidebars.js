/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    { type: 'doc', id: 'index', label: 'Overview' },
    {
      type: 'category',
      label: 'User Guide',
      items: ['user-guide/getting-started'],
    },
  ],
};

module.exports = sidebars;
