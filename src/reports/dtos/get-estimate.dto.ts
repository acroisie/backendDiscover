import { Transform } from "class-transformer";
import { IsNumber, Min, Max, IsString, IsLongitude, IsLatitude } from "class-validator";

export class GetEsitamteDto {
	@IsString()
	make: string;

	@IsString()
	model: string;

	@Transform(({value}) => parseInt(value))
	@IsNumber()
	@Min(1885)
	@Max(2023)
	year: number;
	
	@Transform(({value}) => parseFloat(value))
	@IsLongitude()
	lng: number;
	
	@Transform(({value}) => parseFloat(value))
	@IsLatitude()
	lat: number;
	
	@Transform(({value}) => parseInt(value))
	@IsNumber()
	@Min(0)
	@Max(10000000)
	mileage: number;
}