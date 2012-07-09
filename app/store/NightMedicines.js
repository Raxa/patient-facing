Ext.define('Med-Table.store.NightMedicines', {
    extend:'Ext.data.Store',
    config:{
        model:'Med-Table.model.Medicine',
        data:[
            {
                name:'Benzathine Penicillin Injection',
                medicineImage:'resources/tablets/benzathine-penicillin.jpg',
                afterBeforeFood:'resources/images/med_after_eating-01.png',
                dose:'resources/images/1-injection.jpg',
                warning1:'resources/images/infant_with_cross-01.png',
                warning2:'resources/images/pregnant_with_cross-01.png',
                audio:'resources/Audio/Tablets/Benzathine Penicillin Injection.mp3'
            }/*,
            {
                name:'Artemether',
                medicineImage:'resources/tablets/artemether.jpg',
                afterBeforeFood:'resources/images/med_after_eating-01.png',
                dose:'resources/images/half_med-01.png',
                warning1:'resources/images/infant_with_cross-01.png',
                warning2:'resources/images/pregnant_with_cross-01.png',
             audio:'resources/Audio/Tablets/Artemether.mp3'
            }  */
        ]
    }
});


