import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ReportService } from './report.service';
import { ReportDto } from './report.dto';
import { ApiOperation} from "@nestjs/swagger";

@Controller('reports')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @ApiOperation({ summary: 'Create report' })
  @Post()
  async create(@Body() reportDto: ReportDto) {
    return this.reportService.create(reportDto);
  }
  @ApiOperation({ summary: 'Find all reports' })
  @Get()
  async findAll() {
    return this.reportService.findAll();
  }

  @ApiOperation({ summary: 'Find report by id' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reportService.findOne(+id);
  }
}
