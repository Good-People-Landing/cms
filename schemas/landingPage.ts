export default {
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    {
      name: 'heroCopy',
      title: 'Hero Copy',
      type: 'string',
      description: 'Main text for the hero section',
    },
    {
      name: 'subTitle',
      title: 'Sub Title',
      type: 'string',
      description: 'Subtitle text for the hero section',
    },
    {
      name: 'backgroundVideoPlaybackId',
      title: 'Background Video',
      description: 'The MUX playback ID for the video. Grab from the MUX dashboard.',
      type: 'string',
    },
  ],
}
