import { render, screen } from '@testing-library/react';
import UserList from "./UserList";
import axios from "axios";

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}));

jest.mock('axios');


test('affiche des utilisateurs', async () => {
  const mockUsers = [
    {name: 'Eva'},
    {name: 'Aude'},
    {name: 'Anne'},
    {name: 'Marc'}];

  const mockRes = {data: mockUsers};
  axios.get.mockResolvedValue(Promise.resolve(mockRes));
  render(<UserList />);
  await screen.findByText("Eva");
  expect(screen.getByText("Eva")).toBeInTheDocument();
    expect(screen.getByText("Aude")).toBeInTheDocument();
    expect(screen.getByText("Anne")).toBeInTheDocument();
    expect(screen.getByText("Marc")).toBeInTheDocument();
});