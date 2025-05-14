import { Escape, Trim } from 'class-sanitizer';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  MaxLength,
} from 'class-validator';

import { PlayerSettings } from '@app/shared/core/types/settings';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePlayerDto {
  @ApiProperty()
  @Escape()
  @MaxLength(PlayerSettings.NAME_LENGTH)
  @Trim()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @Escape()
  @MaxLength(PlayerSettings.DESCRIPTION_LENGTH)
  @Trim()
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsNumber()
  @Max(1_000_000_000)
  @IsNotEmpty()
  gold: number;

  @ApiProperty()
  @IsNumber()
  @Max(1_000_000_000)
  @IsNotEmpty()
  silver: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  hit: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  defense: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  attack: number;
}
