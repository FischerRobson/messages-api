/* eslint-disable prettier/prettier */
import { MessagesRepository } from './messages-repository';

export class MessagesService {
  messagesRepository: MessagesRepository;

  constructor() {
    // DONT DO THIS IN REAL APPS
    this.messagesRepository = new MessagesRepository();
  }

  async findOne(id: string) {
    return this.messagesRepository.findOne(id);
  }

  async findAll() {
    return this.messagesRepository.findAll();
  }

  async create(content: string) {
    this.messagesRepository.create(content);
  }
}
