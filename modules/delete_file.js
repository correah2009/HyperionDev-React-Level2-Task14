exports.delete_file = function(fs){
    fs.unlink('nums.txt', (err) => {
        if (err) throw err;
        console.log('nums.txt was deleted');
      });
}