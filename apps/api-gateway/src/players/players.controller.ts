import { Body, Controller, Get, Post } from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

import { CreatePlayerResponseDto } from '@app/shared/players/dto/create-player-responde.dto';
import { CreatePlayerDto } from '@app/shared/players/dto/create-player.dto';
import { sanitize } from 'class-sanitizer';
import { Observable } from 'rxjs';
import { Tags } from '../core/constants/swagger/tags';
import { PlayersService } from './players.service';

@ApiTags(Tags.PLAYERS)
@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @ApiOperation({
    summary: 'Get Hello from Player Service',
    description:
      'This endpoint returns a hello message from the player service.',
  })
  @Get()
  getHello(): Observable<string> {
    return this.playersService.hello();
  }

  @ApiOperation({
    summary: 'Create a new player',
    description: 'This endpoint creates a new player.',
  })
  @ApiBody({
    type: CreatePlayerDto,
    required: true,
  })
  @ApiCreatedResponse({
    description: 'The player has been successfully created.',
    type: CreatePlayerResponseDto,
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error',
  })
  @Post()
  create(
    @Body() createPlayerDto: CreatePlayerDto,
  ): Observable<CreatePlayerResponseDto> {
    try {
      sanitize(createPlayerDto);

      return this.playersService.create(createPlayerDto);
    } catch (error) {
      throw new Error(error);
    }
  }
}
