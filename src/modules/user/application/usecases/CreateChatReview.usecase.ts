import { Inject, Injectable } from '@nestjs/common';
import { CreateChatRepository } from '../protocols/create-chat.repository';
import {
  CreateChatDto,
  ChatRole,
} from '../../presentation/dto/create-chat.dto';

@Injectable()
export class CreateChatReviewUsecase {
  constructor(
    @Inject('CreateChatRepository')
    private readonly createChatRepository: CreateChatRepository,
  ) {}
  async execute({ content, intention }) {
    let prompt: string;
    if (intention === 'resumo') {
      prompt = `
        Realize o processo de ${intention} concernente ao conteúdo: ${content}. 
        Entregue ao usuário o resultado final de forma otimizada sobre o conteúdo solicitado.
        Mantenha as principais informações e elimine o que for desnecessário, não se prive a resumos curtos. 
        Adicione um campos para o título e a descrição do conteúdo de forma espaçada, 
        informe ao usuário que o título é uma sugestão.
      `;
    }

    if (intention === 'revisao') {
      prompt = `
        Realize o processo de ${intention} concernente ao conteúdo: ${content}. 
        Entregue ao usuário o resultado final de forma otimizada sobre o conteúdo solicitado.
        Revise e exponha alternativas que visem os melhores padrões de escritas, além de corrigir
        possíveis erros gramaticais. A intenção é que o conteúdo seja revisado e entregue ao usuário
        de forma clara e objetiva fornecendo opções para melhorias.
      `;
    }

    if (intention === 'correcao') {
      prompt = `
        Realize o processo de ${intention} concernente ao conteúdo: ${content}. 
        Entregue ao usuário o resultado final de com uma correção ortografica para casos de error,
        além de sugestões de correções para melhorias, prorize a semântica a escrita correta. Retorne também
        ao usuário uma breve lista dos erros que ele cometeu. Caso não haja erros, 
        informe ao usuário que o conteúdo está correto e não necessita de correções.
      `;
    }

    const request: CreateChatDto = {
      messages: [
        {
          role: ChatRole.USER,
          content: prompt,
        },
      ],
    };
    return this.createChatRepository.createChat(request);
  }
}
