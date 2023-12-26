import type { Config } from '@netlify/functions'

export const config: Config = {
  method: 'POST',
}

type Data = {
  firstName: string
  lastName: string
  email: string
  projectSummary: string
}

function validate(_data: Data) {
  // TODO: make this do real stuff
  return true
}

function formatEmail(data: Data) {
  return Object.entries(data)
    .map((entry) => entry.join(': '))
    .join('\n\n')
}

export default async function (req: Request) {
  const data = await req.json()
  const isValid = validate(data)

  if (!isValid) return new Response('failure')

  const to = 'to-be-determined@agath.ist'
  const emailBody = formatEmail(data)

  // submit email

  return new Response('success')
}
