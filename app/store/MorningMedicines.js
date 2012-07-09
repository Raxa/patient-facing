Ext.define('Med-Table.store.MorningMedicines',{
    extend:'Ext.data.Store',
    config:{
        model:'Med-Table.model.Medicine',
        data:[
            {
                name:'Enalapril Maleate',
                medicineImage:'resources/tablets/enalapril.jpg',
                afterBeforeFood:'resources/images/med_before_eating-01.png',
                dose:'resources/images/full_med-01.png',
                warning1:'resources/images/infant_with_cross-01.png',
                warning2:'resources/images/pregnant_with_cross-01.png',
                audio:'resources/Audio/Tablets/Enalapril.mp3'
            },
            {
                name:'Atenolol',
                medicineImage:'resources/tablets/atenolol.jpg',
                afterBeforeFood:'resources/images/med_before_eating-01.png',
                dose:'resources/images/half_med-01.png',
                warning1:'resources/images/infant_with_cross-01.png',
                warning2:'resources/images/pregnant_with_cross-01.png',
                audio:'resources/Audio/Tablets/Atenolol.mp3'
            }
        ]
    }
})


