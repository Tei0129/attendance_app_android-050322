import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';
const routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'classlist',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../classlist/classlist.module').then(m => m.ClasslistPageModule)
                    }
                ]
            },
            {
                path: 'delaylist',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../delaylist/delaylist.module').then(m => m.DelaylistPageModule)
                    }
                ]
            },
            {
                path: 'news',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../news/news.module').then(m => m.NewsPageModule)
                    }
                ]
            },
            {
                path: 'messages',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../messages/messages.module').then(m => m.MessagesPageModule)
                    }
                ]
            },
            {
                path: 'sendmessage',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../sendmessage/sendmessage.module').then(m => m.SendmessagePageModule)
                    }
                ]
            },
            {
                path: 'parentconnect',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../parentconnect/parentconnect.module').then(m => m.ParentconnectPageModule)
                    }
                ]
            },
            {
                path: 'children',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../children/children.module').then(m => m.ChildrenPageModule)
                    }
                ]
            },
            {
                path: 'private-message',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../private-message/private-message.module').then(m => m.PrivateMessagePageModule)
                    }
                ]
            },
            {
                path: 'student-notes',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../student-notes/student-notes.module').then(m => m.StudentNotesPageModule)
                    }
                ]
            },
            {
                path: 'elearning-schools',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../elearning-schools/elearning-schools.module').then(m => m.ElearningSchoolsPageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/classlist',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/classlist',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = /** @class */ (() => {
    let TabsPageRoutingModule = class TabsPageRoutingModule {
    };
    TabsPageRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
})();
export { TabsPageRoutingModule };
//# sourceMappingURL=tabs-routing.module.js.map