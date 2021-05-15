import FlipComponent from '../Flip.vue'

export default {
  title: 'Flip',
  argTypes: {
    onClick: { action: 'clicked' }
  }
}

const Template = (args, { argTypes }) => ({
  components: { Flip: FlipComponent },
  props: Object.keys(argTypes),
  template: `
    <Flip
      @onClick="onClick"
    >
      <template v-slot:front>
        Lorem ipsum
      </template>
      <template v-slot:back>
        Dolar sit amet
      </template>
    </Flip>
  `
})

export const Flip = Template.bind({})
