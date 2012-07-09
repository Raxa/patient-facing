Ext.define('Med-Table.store.AfternoonMedicines',{
    extend:'Ext.data.Store',
    config:{
        model:'Med-Table.model.Medicine',
        data:[
            /*{
                name:'Warfarin Sodium (1mg)',
                medicineImage:'resources/tablets/warfarin-sodium-1mg.jpg',
                afterBeforeFood:'resources/images/med_after_eating-01.png',
                dose:'resources/images/full_med-01.png',
                warning1:'resources/images/infant_with_cross-01.png',
                warning2:'resources/images/pregnant_with_cross-01.png',
                audio:'resources/Audio/Tablets/Warfarin Sodium (1mg).mp3'

            }, */
            {
                name:'Warfarin Sodium (2mg)',
                medicineImage:'resources/tablets/warfarin-sodium-2mg.jpg',
                afterBeforeFood:'resources/images/med_after_eating-01.png',
                dose:'resources/images/full_med-01.png',
                warning1:'resources/images/infant_with_cross-01.png',
                warning2:'resources/images/pregnant_with_cross-01.png',
                audio:'resources/Audio/Tablets/Warfarin Sodium (2mg).mp3'
            }
        ]
    }
});


