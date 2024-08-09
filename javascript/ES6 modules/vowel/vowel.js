input = document.querySelector('.input');
countVowel = document.querySelector('.counts')


function vowel()
{
  let Vowel = input.value.split('')
    let count = 0;
    for(let i=0;i<=Vowel.length;i++)
    {
    
        if (Vowel[i] == 'i'  || Vowel[i] == "a"   || Vowel[i] == 'o' 
         || Vowel[i] == 'u'  || Vowel[i] == 'I'   || Vowel[i] == "A" 
         || Vowel[i] == 'O'  || Vowel[i] == 'E'   || Vowel[i] == 'U' 
         || Vowel[i] == 'e')
       
         {

            count++;
       
         }
    
    }

  countVowel.innerHTML = count;

}