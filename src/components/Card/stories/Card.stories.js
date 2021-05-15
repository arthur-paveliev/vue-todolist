import Card from '../SimpleCard'
import ClickableCard from '../ClickableCard'
import FlippableCard from '../FlippableCard'

export default {
  title: 'Card',
  argTypes: {
    header: {
      control: 'text'
    },
    img: {
      control: {
        type: 'select',
        options: ['./city.jpg']
      }
    },
    onClick: { action: 'clicked' }
  }
}

const SimpleTemplate = (args, { argTypes }) => {
  return {
    components: { Card },
    props: Object.keys(argTypes),
    template: `
      <Card
        :header="header"
        :img="img"
        @onClick="onClick"
      >
        Lorem ipsum dolar
      </Card>
    `
  }
}

export const SimpleCard = SimpleTemplate.bind({})
SimpleCard.args = {
  header: 'Test',
  img: './city.jpg'
}

const ClickableTemplate = (args, { argTypes }) => {
  return {
    components: { ClickableCard },
    props: Object.keys(argTypes),
    template: `
      <ClickableCard
        :title="title"
        :card="{ img: img, header: header }"
        @click="onClick"
      >
        Lorem ipsum dolar
      </ClickableCard>
    `
  }
}

export const ClickCard = ClickableTemplate.bind({})
ClickCard.args = {
  title: 'Test',
  img: './city.jpg',
  header: 'Hello'
}

const FlippableTemplate = (args, { argTypes }) => {
  return {
    components: { FlippableCard },
    props: Object.keys(argTypes),
    template: `
      <FlippableCard
        :title="title"
        :card="{ img: img, header: header, body: 'Lorem ipsum dolar' }"
        @click="onClick"
      >
        <template v-slot:front>
          Lorem ipsum
        </template>
        <template v-slot:back>
          Dolar sit amet
        </template>
      </FlippableCard>
    `
  }
}

export const FlipCard = FlippableTemplate.bind({})
FlipCard.args = {
  title: 'Test',
  img: './city.jpg',
  header: 'Hello'
}
