

class Professional {
  id: bigint;
  name: string;
  address: string;
  profession: string;
  status: boolean;

  constructor(id: bigint, name: string, address: string, profession: string, status: boolean) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.profession = profession;
    this.status = status;
  }
}

export default Professional;