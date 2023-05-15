import { Body, Controller, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { CreateReportDto } from './dtos/create-report.dto';
import { ReportsService } from './reports.service';
import { AuthGuard } from 'src/guards/auth.guard';
import { CurrentUser } from 'src/users/decorators/current-user.decorator';
import { User } from 'src/users/user.entity';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { reportDto } from './dtos/report.dto';
import { ApprovedReportDto } from './dtos/approved-report.dto';
import { AdminGuard } from 'src/guards/admin.guard';
import { GetEsitamteDto } from './dtos/get-estimate.dto';

@Controller('reports')
export class ReportsController {
	constructor(private reportsService: ReportsService) {}

	@Get()
	getEstimate(@Query() query: GetEsitamteDto) {
		console.log(query);
	}

	@Post()
	@UseGuards(AuthGuard)
	@Serialize(reportDto)
	createReport(@Body() body: CreateReportDto, @CurrentUser() user: User) {
		return (this.reportsService.create(body, user));
	}
	
	@Patch('/:id')
	@UseGuards(AdminGuard)
	approveReport(@Param('id') id: string, @Body()body: ApprovedReportDto) {
		return (this.reportsService.changeApproval(id, body.approved))
	}
}
