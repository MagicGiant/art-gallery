import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Report } from './report';
import { ReportDto } from './report.dto';

@Injectable()
export class ReportService {
  constructor(
    @InjectRepository(Report)
    private reportRepository: Repository<Report>,
  ) {}

  async create(reportDto: ReportDto): Promise<Report> {
    const report = new Report();
    report.userId = reportDto.userId;
    report.grade = reportDto.grade;
    report.reviewText = reportDto.reviewText;
    report.datetime = reportDto.datetime;

    return this.reportRepository.save(report);
  }

  async findAll(): Promise<Report[]> {
    return this.reportRepository.find();
  }

  async findOne(id: number): Promise<Report> {
    return this.reportRepository.findOne({ where: { id: id } });
  }
}
