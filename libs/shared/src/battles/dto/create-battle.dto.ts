import { Escape, Trim } from 'class-sanitizer';
import {
  IsNotEmpty,
  IsString,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';
import { BattleStatusTypes } from '@app/shared/core/types/settings';

export class CreateBattleDto {
  // @ApiProperty()
  // @Escape()
  // @Trim()
  // @IsString()
  // @IsNotEmpty()
  // id: string;

  @ApiProperty()
  @Escape()
  @Trim()
  @IsString()
  @IsNotEmpty()
  player1: string;

  @ApiProperty()
  @Escape()
  @Trim()
  @IsString()
  @IsNotEmpty()
  player2: string;

  /*
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  status: BattleStatusTypes;*/ //Will be set as PENDING by default in the database

}
