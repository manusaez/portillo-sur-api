select 
cli.CardCode as 'customerId',
cli.CardName as 'firstName',
cli.Address as 'address',
cli.Cellular as 'mainPhone',
cli.Phone1 as 'secondaryPhone',
cli.E_mail as 'email',
cli.LicTradNum as 'RFC',
cli.Address as 'fiscalAddress',
cli.E_mail as 'fiscalEmail',
1 as 'contactable'
from [SBO_CD1]..OCRD as cli WHERE cli.LicTradNum = @rut