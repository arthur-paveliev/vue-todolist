import Menu from '../Menu'

export default {
  title: 'Menu'
}

export const normalButton = () => ({
  components: { Menu },
  template: `<Menu :links="[{ url: '/', title: 'Home' }, { url: '/projects', title: 'Projects' }]"/>` //eslint-disable-line
})
