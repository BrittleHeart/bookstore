export default class Application {
  async runApp(): Promise<void> {
    console.log('Hi application')
  }
}

async function bootstrap() {
  const app = new Application()

  await app.runApp()
}

bootstrap()
