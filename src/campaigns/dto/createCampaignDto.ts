import { Transform } from 'class-transformer';
import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  IsUUID,
  MaxLength,
} from 'class-validator';
import { CampaignPurpose } from 'src/common/enum';

export class CreateCampaignDto {
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.toLowerCase().trim())
  name: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  description: string;

  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  amountRequired: number;

  @IsNotEmpty()
  @IsEnum(CampaignPurpose)
  purpose: CampaignPurpose;

  @IsNotEmpty()
  @IsUUID()
  officialId: string;
}