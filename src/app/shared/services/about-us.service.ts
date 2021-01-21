import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericService } from './generic.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Direction } from '../models/direction';
import { RendezVous } from '../models/rendez-vous';

@Injectable()
export class AboutUsService extends GenericService {

  constructor(private http: HttpClient) {
    super();
  }
  getDirectionMembers(): Observable<Direction[]> {
    return this.http.get<Direction[]>(environment.baseUrl + 'direction/getDirectionMembers');
  }
  getAdministrationMembers(): Observable<Direction[]> {
    return this.http.get<Direction[]>(environment.baseUrl + 'direction/getAdministrationMembers');
  }
  getRendezVous() : Observable<RendezVous[]>{
    return this.http.get<RendezVous[]>(environment.baseUrl + 'rendez-vous/getLatestRendezVous');
  }
  getDocsAdmin(){
    return( [
      {
      name : 'طلب رخصة تغیب',
      url : 'assets/upload/1527237747.pdf'
    },
    {
      name : 'مطلب ترشح للقیام بساعات تدریس تكمیلیة',
      url : 'assets/upload/1527237749.pdf'
    },
    {
      name : 'إلتــزام',
      url : 'assets/upload/1527237742.pdf'
    },
    {
      name : 'إعــــلام مباشرة العمل',
      url : 'assets/upload/1527237741.pdf'
    },
    {
      name : 'مطلب للحصول على ترخيص للقيام بساعات تدريس إضافية بإحدى المؤسسات الخاصّة لوزارة التعليم العالي والبحث العلمي',
      url : 'assets/upload/1527237744.pdf'
    },
    {
      name : 'تصريح على الشرف',
      url : 'assets/upload/1527237745.pdf'
    },
    {
      name : 'مطلب للحصول على ترخيص للقيام بساعات تدريس عرضيّة بإحدى المؤسسات التابعة لوزارة التعليم العالي والبحث العلمي',
      url : 'assets/upload/1527237750.pdf'
    },
  ]);
  }

}
