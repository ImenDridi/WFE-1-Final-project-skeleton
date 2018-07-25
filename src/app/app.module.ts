import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { ChatAppComponent } from './components/chat-app/chat-app.component';
import { AboutComponent } from './components/about/about.component';
import { ParentChatBoxComponent } from './components/parent-chat-box/parent-chat-box.component';
import { ChildChatBoxComponent } from './components/child-chat-box/child-chat-box.component';
import { ChattingService } from './services/chatting.service';




@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    ChatAppComponent,
    AboutComponent,
    ParentChatBoxComponent,
    ChildChatBoxComponent,



  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],

  providers: [ChattingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
