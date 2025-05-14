import { IsNotEmpty, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreatePlayerResponseDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly identifier: string;

  constructor(identifier: string) {
    this.identifier = identifier;
  }
}
