import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'issuer-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  public gridData = [
    {
      name: 'John Doe',
      email: 'john.doe@email.com',
      phone: '+44 207 555 4444',
      role: 'Senior Mananger'
    },
    {
      name: 'Jane Doe',
      email: 'jane.doe@email.com',
      phone: '+44 207 555 4444',
      role: 'Mananger'
    },
    {
      name: 'Jan Doe',
      email: 'jan.doe@email.com',
      phone: '+44 207 555 4444',
      role: 'Legal'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
