Ext.define('Med-Table.store.EveningMedicines',{
    extend:'Ext.data.Store',
    config:{
        model:'Med-Table.model.Medicine',
        data:[
            {
                name:'Digoxin',
                medicineImage:'resources/tablets/digoxin.jpg',
                afterBeforeFood:'resources/images/med_before_eating-01.png',
                dose:'resources/images/full_med-01.png',
                warning1:'resources/images/infant_with_cross-01.png',
                warning2:'resources/images/pregnant_with_cross-01.png',
                audio:'resources/Audio/Tablets/Digoxin.mp3'
            },
            {
                name:'Furosemide',
                medicineImage:'resources/tablets/furosemide.jpg',
                afterBeforeFood:'resources/images/med_after_eating-01.png',
                dose:'resources/images/half_med-01.png',
                warning1:'resources/images/infant_with_cross-01.png',
                warning2:'resources/images/pregnant_with_cross-01.png',
                audio:'resources/Audio/Tablets/Furosemide.mp3'
            }
        ]
    }
})


