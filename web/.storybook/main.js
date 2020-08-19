module.exports = {
  stories: ['../src//**/*.stories.!(tjm)?(ds)?(x)'],
  addons: [
    '@storybook/addon-controls',
    '@storybook/addon-actions',
    '@storybook/addon-storysource',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-jest',
    '@storybook/addon-links',
    'storybook-addon-designs',
  ],
}
