Ext.define('Med-Table.model.Medicine', 
{
    extend:'Ext.data.Model',
    config:
	{
        fields:['name', 'medicineImage', 'afterBeforeFood','dose','warning1','warning2','audio']
    }
});