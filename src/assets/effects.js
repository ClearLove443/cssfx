const requireEffect2 = import.meta.glob('../effects/*.vue', { eager: true })
const requireEffect = import.meta.glob('../effects/*.vue', { as: 'raw', eager: true })

const effectList = Object.keys(requireEffect);

const effects = {};
const components = {};

for (const filename of effectList) {
  const name = filename.replace('../effects/', '').replace('.vue', '');
  const type = name.substring(0, name.indexOf('-'));

  const raw = requireEffect[filename];
  const component = requireEffect2[filename].default;

  // debugger

  const html = /<template>(.*?)<\/template>/g // find html between template tags
    .exec(JSON.stringify(raw))[0]
    .replace(/<\/?template>/g, '') // remove template tags
    .replace(/^\\n/, '') // remove leading linebreak
    .replace(/\\r\\n/g, '\n') // replace escape characters
    .replace(/\\n/g, '\n') // replace escape characters
    .replace(/\\"/g, '"');

  const css = /<style scoped>(.*?)<\/style>/g // find css between style tags
    .exec(JSON.stringify(raw))[0]
    .replace(/<\/?style(?: scoped)?>/g, '') // remove style tags
    .replace(/^\\n/, '') // remove leading linebreak
    .replace(/\\r\\n/g, '\n') // replace escape characters
    .replace(/\\n/g, '\n'); // replace \n with newlines

  effects[name] = { name, type, html, css };
  components[name] = component;
}

export { components, effects };

