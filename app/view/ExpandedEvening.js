Ext.define('Med-Table.view.ExpandedEvening',{
    extend:'Ext.Panel',
    xtype:'expandedevening',

    initialize: function () {
        audio = (Ext.getCmp('audio1'));
        audio.toggle();
    },

    config:{

        title:'EveningSchedule',
        iconCls:'time',

        layout:'vbox',
        items:[
            {   xtype: 'toolbar',
                ui:'light',
                height : 'auto',
                items: [
                    {
                        xtype : 'audio',
                        id:'audio1',
                        hidden: true,
                        url : 'resources/Audio/ExpandedScheduleScreen.mp3'
                    },
                    {
                        xtype: 'button',
                        disabled:'true',
                        text : '<img src="resources/images/sched_clicked.png">',
                        handler: function()
                        {
                            audio.stop();
                            Ext.Viewport.setActiveItem(Ext.create('Med-Table.view.CalendarDisplay'))
                        },
                        padding:'5px'
                    },
                    {
                        xtype: 'button',
                        text : '<img src="resources/images/instructions-small.png">',
                        handler: function()
                        {
                            audio.stop();
                            Ext.Viewport.setActiveItem(Ext.create('Med-Table.view.Instructions'))
                        },
                        padding:'5px'
                    },
                    {
                        xtype: 'button',
                        text : '<img src="resources/images/appoint-small.png">',
                        handler: function()
                        {
                            audio.stop();
                            Ext.Viewport.setActiveItem(Ext.create('Med-Table.view.Appointment'))
                        },
                        padding:'5px'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        text : '<img src="resources/images/home-small.png">',
                        handler: function()
                        {
                            audio.stop();
                            Ext.Viewport.setActiveItem(Ext.create('Med-Table.view.Main'))
                        },
                        padding:'5px'
                    }
                ]


            },

            {
                xtype:'container',
                layout: 'hbox',
                flex:1,
                items: [
                    {
                        xtype: 'container',
                        //id: 'morningctnr',
                        flex: 1,
                        layout:'vbox',
                        items:[
                            {
                                xtype:'container',
                                height: '286',
                                style: 'background-color: #30cc18;',
                                //docked:'top',
                                //flex:1,
                                layout : 'hbox',
                                //height: 'auto',
                                //ui:'light',
                                items: [
                                    {xtype: "spacer"},
                                    {
                                        xtype: 'button',
                                        text: '<img src="resources/images/morning-small.png">',
                                        padding:'0px',

                                        //padding:'5px',
                                        //cls: 'morningImageButton',
                                        handler: function()
                                        {
                                            audio.stop();
                                            Ext.Viewport.setActiveItem(Ext.create('Med-Table.view.ExpandedMorning'))
                                        }
                                    },
                                    {xtype: "spacer"}
                                ]
                            },
                            {
                                xtype:'list',
                                flex:1,
                                store:'MorningMedicines',
                                itemTpl:'<img src="{medicineImage}"/><h6>{name:ellipsis(10)}</h6>',
                                itemCls:'medicine-entry',
                                style: 'background-color: #30cc18;',
                                listeners: {
                                    itemtap: function (view, index, item,record,e)
                                    {
                                        audio.stop();
                                        Ext.Viewport.setActiveItem(Ext.create('Med-Table.view.ExpandedMorning'))
                                    }
                                }
                            }
                        ]
                    },

                    {
                        xtype: 'container',
                        //id: 'morningctnr',
                        flex: 1,
                        layout:'vbox',
                        items:[
                            {
                                xtype:'container',
                                height: '286',
                                style: 'background-color: #1f60fe;',
                                //docked:'top',
                                //flex:1,
                                layout : 'hbox',
                                //height: 'auto',
                                //ui:'light',
                                items: [
                                    {xtype: "spacer"},
                                    {
                                        xtype: 'button',
                                        text: '<img src="resources/images/day-small.png">',
                                        padding:'0px',

                                        //padding:'5px',
                                        //cls: 'morningImageButton',
                                        handler: function()
                                        {
                                            audio.stop();
                                            Ext.Viewport.setActiveItem(Ext.create('Med-Table.view.ExpandedAfternoon'))
                                        }
                                    },
                                    {xtype: "spacer"}
                                ]
                            },
                            {
                                xtype:'list',
                                flex:1,
                                store:'AfternoonMedicines',
                                itemTpl:'<img src="{medicineImage}"/><h6>{name:ellipsis(10)}</h6>',
                                itemCls:'medicine-entry',
                                style: 'background-color: #1f60fe;',
                                listeners: {
                                    itemtap: function (view, index, item,record,e)
                                    {
                                        audio.stop();
                                        Ext.Viewport.setActiveItem(Ext.create('Med-Table.view.ExpandedAfternoon'))
                                    }
                                }
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        //id: 'morningctnr',
                        width :'625px',
                        //flex: 1,
                        layout:'vbox',

                        items:[
                            {
                                xtype:'container',
                                height: '286',
                                style: 'background-color: #30cc18;',
                                //docked:'top',
                                //flex:1,
                                layout : 'hbox',
                                //height: 'auto',
                                //ui:'light',
                                items: [
                                    {xtype: "spacer"},
                                    {
                                        xtype: 'button',
                                        text: '<img src="resources/images/evening_EXPANDED-01.png">',
                                        padding:'0px',
                                        //cls: 'morningImageButton',
                                        handler: function()
                                        {
                                            audio.stop();
                                            Ext.Viewport.setActiveItem(Ext.create('Med-Table.view.Schedule'))
                                        }
                                    },
                                    {xtype: "spacer"}
                                ]
                            },
                            {
                                xtype:'list',
                                flex:1,
                                store:'EveningMedicines',
                                itemTpl:'<img src="{medicineImage}"/> <h1>{name}</h1> <img src="{afterBeforeFood}"/> <img src="{dose}"/> <img src="{warning1}"/> <img src="{warning2}"/> <h1></h1> ',
                                itemCls:'medicine-entry',
                                style: 'background-color: #30cc18;',
                                listeners: {
                                    itemtap: function (view, index, item,record,e)
                                    {
                                        //to add handler to play audio for tablet
                                    }
                                }

                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        //id: 'morningctnr',
                        flex: 1,
                        layout:'vbox',

                        items:[

                            {
                                xtype:'container',
                                height: '286',
                                style: 'background-color: #1f60fe;',

                                //docked:'top',
                                //flex:1,
                                layout : 'hbox',

                                //height: 'auto',
                                //ui:'light',
                                items: [
                                    {xtype: "spacer"},
                                    {
                                        xtype: 'button',
                                        text: '<img src="resources/images/night-small.png">',
                                        padding:'0px',

                                        //padding:'5px',
                                        //cls: 'morningImageButton',
                                        handler: function()
                                        {
                                            audio.stop();
                                            Ext.Viewport.setActiveItem(Ext.create('Med-Table.view.ExpandedNight'))
                                        }
                                    },
                                    {xtype: "spacer"}
                                ]
                            },
                            {
                                xtype:'list',
                                flex:1,
                                store:'NightMedicines',
                                itemTpl:'<img src="{medicineImage}"/><h6>{name:ellipsis(10)}</h6>',
                                itemCls:'medicine-entry',
                                style: 'background-color: #1f60fe;',
                                listeners: {
                                    itemtap: function (view, index, item,record,e)
                                    {
                                        audio.stop();
                                        Ext.Viewport.setActiveItem(Ext.create('Med-Table.view.ExpandedNight'))
                                    }
                                }

                            }
                        ]
                    }
                ]}
        ]


    }

});