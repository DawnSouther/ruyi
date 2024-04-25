import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatListModule, MatSelectionList, MatSelectionListChange } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import DPlayer, { DPlayerDanmaku } from 'dplayer';
const BASE_URL = 'https://file.note.0moe.cn/video/';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatListModule, MatGridListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewInit {

  dp!: DPlayer;
  playerEle = viewChild.required<ElementRef<HTMLDivElement>>('player');

  ngAfterViewInit(): void {
    const url = localStorage.getItem('current') ?? '';
    this.dp = new DPlayer({
      container: this.playerEle().nativeElement,
      video: {
        url
      },
    });
  }

  change(event: MatSelectionListChange) {
    const url = event.options[0].value;
    localStorage.setItem('current', url);
    this.dp.switchVideo({ url: BASE_URL + url }, {} as DPlayerDanmaku);
  }

  title = 'ruyi';
  videos: string[] = [
    '01--【24年5月】01.软考介绍及学习方式说明（从本视频开始按顺序往下看即可）.mp4',
    '02--【24年5月】02.机考常见问题说明.mp4',
    '03--【24年5月】03.第1章-信息化发展（1.1-1.3）.mp4',
    '04--【24年5月】04.第1章-信息化发展（1.4-1.5）.mp4',
    '05--【24年5月】05.第1章-习题课.mp4',
    '06--【24年5月】06.第2章-信息技术发展(2.1).mp4',
    '07--【24年5月】07.第2章-信息技术发展(2.2).mp4',
    '08--【24年5月】08.第2章-习题课.mp4',
    '09--【24年5月】09.第3章-信息系统治理.mp4',
    '10--【24年5月】10.第3章-习题课.mp4',
    '11--【24年5月】11.第4章-信息系统管理.mp4',
    '12--【24年5月】12.第4章-习题课.mp4',
    '13--【24年5月】13.第5章-信息系统工程（5.1）.mp4',
    '14--【24年5月】14.第5章-信息系统工程（5.2-5.4）.mp4',
    '15--【24年5月】15.第5章-习题课.mp4',
    '16--【24年5月】16.第6章-项目管理概述（6.1-6.2）.mp4',
    '17--【24年5月】17.第6章-项目管理概论（6.3-6.4）.mp4',
    '18--【24年5月】17.第6章-习题课.mp4',
    '19--【24年5月】18.第7章-项目立项管理.mp4',
    '20--【24年5月】19.第7章-习题课.mp4',
    '21--【24年5月】20.第8章-项目整合管理（8.1-8.5）.mp4',
    '22--【24年5月】21.第8章-项目整合管理（8.6-8.9）.mp4',
    '23--【24年5月】22.第8章-习题课.mp4',
    '24--【24年5月23.第9章-项目范围管理（9.1-9.4）.mp4',
    '25--【24年5月】24.第9章-项目范围管理（9.5-9.8）.mp4',
    '26--【24年5月】26.第9章-习题课.mp4',
    '27--【24年5月】26.第10章-项目进度管理（10.1-10.6）.mp4',
    '28--【24年5月】27.第10章-项目进度管理（10.7-10.8）.mp4',
    '29--【24年5月】29.第10章-习题课.mp4',
    '30--【24年5月】30.第11章-项目成本管理.mp4',
    '31--【24年5月】31.第11章-习题课.mp4',
    '32--【24年5月】31.第12章-项目质量管理（12.1-12.2）.mp4',
    '33--【24年5月】32.第12章-项目质量管理（12.3-12.5）.mp4',
    '34--【24年5月】33.第12章-习题课.mp4',
    '35--【24年5月】34.第13章-项目资源管理（13.1-13.3）.mp4',
    '36--【24年5月】35.第13章-项目资源管理（13.4-13.8）.mp4',
    '37--【24年5月】36.第13章-习题课.mp4',
    '38--【24年5月】37.第14章-项目沟通管理.mp4',
    '39--【24年5月】39.第14章-习题课.mp4',
    '40--【24年5月】39.第15章-项目风险管理（15.1-15.4）.mp4',
    '41--【24年5月】40.第15章-项目风险管理（15.5-15.9）.mp4',
    '42--【24年5月】42.第15章-习题课.mp4',
    '43--【24年5月】43.第16章-项目采购管理（16.1-16.5）.mp4',
    '44--【24年5月】44.第16章-项目采购管理（16.6）.mp4',
    '45--【24年5月】45.第16章-习题课.mp4',
    '46--【24年5月】46.第17章-干系人管理.mp4',
    '47--【24年5月】47.第17章-习题课.mp4',
    '48--【24年5月】47.第18章-项目绩效域（18.1-18.4）.mp4',
    '49--【24年5月】48.第18章-项目绩效域（18.5-18.8）.mp4',
    '50--【24年5月】50.第18章-习题课.mp4',
    '51--【24年5月】51.第19章-配置与变更管理（1）.mp4',
    '52--【24年5月】52.第19章-配置与变更管理（2）.mp4',
    '53--【24年5月】53.第19章-习题课.mp4',
    '54--【24年5月】54.第20章-高级项目管理.mp4',
    '55--【24年5月】55.第20章-习题课.mp4',
    '56--【24年5月】56.第21章-项目管理科学基础.mp4',
    '57--【24年5月】57.第22章-组织通用治理.mp4',
    '58--【24年5月】58.第21、22章-习题课.mp4',
    '59--【24年5月】59.第23章-组织通用管理.mp4',
    '59--【24年5月】59.第23章-组织通用管理.mp4.baiduyun.downloading',
    '59--【24年5月】59.第23章-组织通用管理.mp4.baiduyun.downloading.cfg',
    '60--【24年5月】60.第23章-习题课.mp4',
    '61--【24年5月】61.第24章-法律法规与标准规范（1）.mp4',
    '62--【24年5月】62.第24章-法律法规与标准规范（2）.mp4',
    '63--【24年5月】63.第24章-习题课.mp4',
    '64--【24年5月】64.补充学习—十四五规划、新法规、新技术（1）.mp4',
    '65--【24年5月】65.补充学习—十四五规划、新法规、新技术（2）.mp4',
    '66--【24年5月】66.补充学习-习题课.mp4',
    '67--【24年5月】67.历年英语真题-习题课.mp4'
  ];
}
