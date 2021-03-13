import '@testing-library/jest-dom'
import { render } from '@testing-library/vue'

import App from '@/App.vue'

describe('App.vue', () => {
  it('renders correct image', () => {
    const { getByTestId } = render(App, {
      props: { defaultImage: true }
    })

    expect(getByTestId('logo')).toHaveAttribute('src', './assets/logo-default.png')
  })
})
