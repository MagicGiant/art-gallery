import { IsInt, IsString, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ReportDto {
  @ApiProperty()
  @IsInt()
  userId: number;

  @ApiProperty()
  @IsInt()
  grade: number;

  @ApiProperty()
  @IsString()
  reviewText: string;

  @ApiProperty()
  @IsDate()
  datetime: Date;
}
