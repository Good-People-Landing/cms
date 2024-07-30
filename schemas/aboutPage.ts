export default {
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    {
      name: 'aboutCopy',
      title: 'About Copy',
      type: 'string',
      description: 'Main text for the about section',
    },
    {
      name: 'backgroundVideoPlaybackId',
      title: 'Background Video',
      description: 'The MUX playback ID for the video. Grab from the MUX dash',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
