const solution = (num_list, n) =>  [...num_list.splice(n), ... num_list.slice(0,n)];
