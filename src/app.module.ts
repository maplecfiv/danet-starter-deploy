import { Module } from './deps.ts';
import { TodoModule } from './todo/module.ts';
import { AppController } from './app.controller.ts';

@Module({
  controllers: [AppController],
  imports: [TodoModule]
})
export class AppModule {}
