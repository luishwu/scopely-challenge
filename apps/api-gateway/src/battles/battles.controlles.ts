import { Body, Controller, Get, Post } from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

import { CreateBattleResponseDto } from '@app/shared/battles/dto/create-battle-responde.dto';
import { sanitize } from 'class-sanitizer';
import { Observable } from 'rxjs';
import { Tags } from '../core/constants/swagger/tags';
import { BattlesService } from './battles.service';
import { CreateBattleDto } from '@app/shared/battles/dto/create-battle.dto';


@ApiTags(Tags.BATTLES)
@Controller('battles')
export class BattlesController {
  constructor(private readonly battlesService: BattlesService) {}

  @ApiOperation({
    summary: 'Get Hello from Player Service',
    description:
      'This endpoint returns a hello message from the player service.',
  })
  @Get()
  getHello(): Observable<string> {
    return this.battlesService.hello();
  }

  @ApiOperation({
    summary: 'Create a new battle',
    description: 'This endpoint creates a new battle between two players.',
  })
  @ApiBody({
    type: CreateBattleDto,
    required: true,
  })
  @ApiCreatedResponse({
    description: 'The player has been successfully created.',
    type: CreateBattleResponseDto,
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error',
  })
  @Post()
  create(
    @Body() createBattleDto: CreateBattleDto,
  ): Observable<CreateBattleResponseDto> {
    try {
      sanitize(createBattleDto);

      return this.battlesService.create(createBattleDto);
    } catch (error) {
      throw new Error(error);
    }
  }
}
