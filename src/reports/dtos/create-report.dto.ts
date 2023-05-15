import { IsLatitude, IsLongitude, IsNumber, IsString, Max, Min } from "class-validator";

export class CreateReportDto {

	@IsNumber()
	@Min(0)
	@Max(1000000000)
	price: number;

	@IsString()
	make: string;

	@IsString()
	model: string;

	@IsNumber()
	@Min(1885)
	@Max(2023)
	year: number;

	@IsLongitude()
	lng: number;

	@IsLatitude()
	lat: number;

	@IsNumber()
	@Min(0)
	@Max(10000000)
	mileage: number;
}