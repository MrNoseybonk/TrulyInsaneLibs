import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Person } from 'src/app/Models/person';

@Component({
  selector: 'app-typecreate',
  templateUrl: './typecreate.component.html',
  styleUrls: ['./typecreate.component.css']
})
export class TypecreateComponent implements OnInit {

  public formGroup = this.fb.group({
    typedlib: [null, Validators.required]
  });

  loggedUser: Person;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loggedUser = JSON.parse(localStorage.getItem('currentUser'));
    if (this.loggedUser == null)
    {
      document.getElementById('loggedIn').style.display = 'none';
      document.getElementById('loggedOut').style.display = 'block';
    }
    else
    {
      document.getElementById('loggedIn').style.display = 'block';
      document.getElementById('loggedOut').style.display = 'none';
    }
  }

  onNounClick()
  {
    const currentValue = this.formGroup.get('typedlib').value;
    let finalChar = '';

    if (currentValue !== null)
    {
      finalChar = currentValue.charAt(currentValue.length - 1);
    }

    if (this.formGroup.get('typedlib').value != null)
    {
      if (finalChar === ' ' || finalChar === '\'' || finalChar === '"')
      {
        this.formGroup.get('typedlib').setValue(this.formGroup.get('typedlib').value + '<noun>');
      }
      else
      {
        this.formGroup.get('typedlib').setValue(this.formGroup.get('typedlib').value + ' <noun>');
      }
    }
    else
    {
      this.formGroup.get('typedlib').setValue('<noun>');
    }
  }

  onPluralClick()
  {
    const currentValue = this.formGroup.get('typedlib').value;
    let finalChar = '';

    if (currentValue !== null)
    {
      finalChar = currentValue.charAt(currentValue.length - 1);
    }

    if (this.formGroup.get('typedlib').value != null)
    {
      if (finalChar === ' ' || finalChar === '\'' || finalChar === '"')
      {
        this.formGroup.get('typedlib').setValue(this.formGroup.get('typedlib').value + '<plural>');
      }
      else
      {
        this.formGroup.get('typedlib').setValue(this.formGroup.get('typedlib').value + ' <plural>');
      }
    }
    else
    {
      this.formGroup.get('typedlib').setValue('<plural>');
    }
  }

    onProperClick()
  {
    const currentValue = this.formGroup.get('typedlib').value;
    let finalChar = '';

    if (currentValue !== null)
    {
      finalChar = currentValue.charAt(currentValue.length - 1);
    }

    if (this.formGroup.get('typedlib').value != null)
    {
      if (finalChar === ' ' || finalChar === '\'' || finalChar === '"')
      {
        this.formGroup.get('typedlib').setValue(this.formGroup.get('typedlib').value + '<proper>');
      }
      else
      {
        this.formGroup.get('typedlib').setValue(this.formGroup.get('typedlib').value + ' <proper>');
      }
    }
    else
    {
      this.formGroup.get('typedlib').setValue('<proper>');
    }
  }

  onVerbClick()
  {
    const currentValue = this.formGroup.get('typedlib').value;
    let finalChar = '';

    if (currentValue !== null)
    {
      finalChar = currentValue.charAt(currentValue.length - 1);
    }

    if (this.formGroup.get('typedlib').value != null)
    {
      if (finalChar === ' ' || finalChar === '\'' || finalChar === '"')
      {
        this.formGroup.get('typedlib').setValue(this.formGroup.get('typedlib').value + '<verb>');
      }
      else
      {
        this.formGroup.get('typedlib').setValue(this.formGroup.get('typedlib').value + ' <verb>');
      }
    }
    else
    {
      this.formGroup.get('typedlib').setValue('<verb>');
    }
  }

  onPastClick()
  {
    const currentValue = this.formGroup.get('typedlib').value;
    let finalChar = '';

    if (currentValue !== null)
    {
      finalChar = currentValue.charAt(currentValue.length - 1);
    }

    if (this.formGroup.get('typedlib').value != null)
    {
      if (finalChar === ' ' || finalChar === '\'' || finalChar === '"')
      {
        this.formGroup.get('typedlib').setValue(this.formGroup.get('typedlib').value + '<past>');
      }
      else
      {
        this.formGroup.get('typedlib').setValue(this.formGroup.get('typedlib').value + ' <past>');
      }
    }
    else
    {
      this.formGroup.get('typedlib').setValue('<past>');
    }
  }

  onIngClick()
  {
    const currentValue = this.formGroup.get('typedlib').value;
    let finalChar = '';

    if (currentValue !== null)
    {
      finalChar = currentValue.charAt(currentValue.length - 1);
    }

    if (this.formGroup.get('typedlib').value != null)
    {
      if (finalChar === ' ' || finalChar === '\'' || finalChar === '"')
      {
        this.formGroup.get('typedlib').setValue(this.formGroup.get('typedlib').value + '<ing>');
      }
      else
      {
        this.formGroup.get('typedlib').setValue(this.formGroup.get('typedlib').value + ' <ing>');
      }
    }
    else
    {
      this.formGroup.get('typedlib').setValue('<ing>');
    }
  }

  onAdjectiveClick()
  {
    const currentValue = this.formGroup.get('typedlib').value;
    let finalChar = '';

    if (currentValue !== null)
    {
      finalChar = currentValue.charAt(currentValue.length - 1);
    }

    if (this.formGroup.get('typedlib').value != null)
    {
      if (finalChar === ' ' || finalChar === '\'' || finalChar === '"')
      {
        this.formGroup.get('typedlib').setValue(this.formGroup.get('typedlib').value + '<adjective>');
      }
      else
      {
        this.formGroup.get('typedlib').setValue(this.formGroup.get('typedlib').value + ' <adjective>');
      }
    }
    else
    {
      this.formGroup.get('typedlib').setValue('<adjective>');
    }
  }

  onColorClick()
  {
    const currentValue = this.formGroup.get('typedlib').value;
    let finalChar = '';

    if (currentValue !== null)
    {
      finalChar = currentValue.charAt(currentValue.length - 1);
    }

    if (this.formGroup.get('typedlib').value != null)
    {
      if (finalChar === ' ' || finalChar === '\'' || finalChar === '"')
      {
        this.formGroup.get('typedlib').setValue(this.formGroup.get('typedlib').value + '<color>');
      }
      else
      {
        this.formGroup.get('typedlib').setValue(this.formGroup.get('typedlib').value + ' <color>');
      }
    }
    else
    {
      this.formGroup.get('typedlib').setValue('<color>');
    }
  }

  onAdverbClick()
  {
    const currentValue = this.formGroup.get('typedlib').value;
    let finalChar = '';

    if (currentValue !== null)
    {
      finalChar = currentValue.charAt(currentValue.length - 1);
    }

    if (this.formGroup.get('typedlib').value != null)
    {
      if (finalChar === ' ' || finalChar === '\'' || finalChar === '"')
      {
        this.formGroup.get('typedlib').setValue(this.formGroup.get('typedlib').value + '<adverb>');
      }
      else
      {
        this.formGroup.get('typedlib').setValue(this.formGroup.get('typedlib').value + ' <adverb>');
      }
    }
    else
    {
      this.formGroup.get('typedlib').setValue('<adverb>');
    }
  }

  onNumberClick()
  {
    const currentValue = this.formGroup.get('typedlib').value;
    let finalChar = '';

    if (currentValue !== null)
    {
      finalChar = currentValue.charAt(currentValue.length - 1);
    }

    if (this.formGroup.get('typedlib').value != null)
    {
      if (finalChar === ' ' || finalChar === '\'' || finalChar === '"')
      {
        this.formGroup.get('typedlib').setValue(this.formGroup.get('typedlib').value + '<number>');
      }
      else
      {
        this.formGroup.get('typedlib').setValue(this.formGroup.get('typedlib').value + ' <number>');
      }
    }
    else
    {
      this.formGroup.get('typedlib').setValue('<number>');
    }
  }

  onFoodClick()
  {
    const currentValue = this.formGroup.get('typedlib').value;
    let finalChar = '';

    if (currentValue !== null)
    {
      finalChar = currentValue.charAt(currentValue.length - 1);
    }

    if (this.formGroup.get('typedlib').value != null)
    {
      if (finalChar === ' ' || finalChar === '\'' || finalChar === '"')
      {
        this.formGroup.get('typedlib').setValue(this.formGroup.get('typedlib').value + '<food>');
      }
      else
      {
        this.formGroup.get('typedlib').setValue(this.formGroup.get('typedlib').value + ' <food>');
      }
    }
    else
    {
      this.formGroup.get('typedlib').setValue('<food>');
    }
  }

  onLiquidClick()
  {
    const currentValue = this.formGroup.get('typedlib').value;
    let finalChar = '';

    if (currentValue !== null)
    {
      finalChar = currentValue.charAt(currentValue.length - 1);
    }

    if (this.formGroup.get('typedlib').value != null)
    {
      if (finalChar === ' ' || finalChar === '\'' || finalChar === '"')
      {
        this.formGroup.get('typedlib').setValue(this.formGroup.get('typedlib').value + '<liquid>');
      }
      else
      {
        this.formGroup.get('typedlib').setValue(this.formGroup.get('typedlib').value + ' <liquid>');
      }
    }
    else
    {
      this.formGroup.get('typedlib').setValue('<liquid>');
    }
  }
}
