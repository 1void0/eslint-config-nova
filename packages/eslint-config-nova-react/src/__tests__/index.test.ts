/* eslint-env jest */

/* eslint-disable import/unambiguous */

/* eslint-disable-next-line import/no-commonjs, @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports */
const config = require('../')

describe('eslint-config-nova-react', (): void => {
  test('has the correct environment', (): void => {
    expect.assertions(1)
    expect(config.env).toStrictEqual({
      browser: true,
      es6: true,
      node: true
    })
  })

  test('extends expected rules', async (): Promise<void> => {
    expect.hasAssertions()

    config.extends.forEach(
      (name: string): void => {
        expect(
          name === 'eslint-config-nova' ||
            name.includes('a11y') ||
            name.includes('react') ||
            name.includes('react-hooks')
        ).toBe(true)
      }
    )
  })
})
